import { DailyMealPlan } from '../data/dietEngine';
import { UserProfile } from '../types';

/**
 * Generates an A4-optimized, beautifully branded HerLytics Diet Chart
 * Opens a print-ready window styled with clean tables, page breaks, and medical disclaimers,
 * allowing the user to Save as PDF or Print directly.
 */
export function generateDietChartPdf(plan: DailyMealPlan, userProfile?: Partial<UserProfile>) {
  const printWindow = window.open('', '_blank', 'width=900,height=1100');
  if (!printWindow) {
    alert('Please allow popups to download your Diet Chart PDF.');
    return;
  }

  const userName = userProfile?.name || 'HerLytics Member';
  const userAge = plan.profileSnapshot.age || userProfile?.age || 26;
  const userHeight = plan.profileSnapshot.heightCm || userProfile?.heightCm || 162;
  const userWeight = plan.profileSnapshot.weightKg || userProfile?.weightKg || 60;
  const userBMI = plan.energyRequirement.bmi || 22.8;

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HerLytics Personalized Indian Diet Chart — ${userName}</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 15mm 15mm 15mm 15mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #312328;
      background: #FFFFFF;
      font-size: 11pt;
      line-height: 1.45;
    }
    .header {
      border-bottom: 2px solid #B85062;
      padding-bottom: 12px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .brand-title {
      font-size: 22pt;
      font-weight: 800;
      color: #B85062;
      letter-spacing: -0.5px;
    }
    .brand-subtitle {
      font-size: 9pt;
      color: #8E717B;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .meta-box {
      text-align: right;
      font-size: 9pt;
      color: #584149;
    }
    .section-title {
      font-size: 13pt;
      font-weight: 700;
      color: #312328;
      margin: 14px 0 8px 0;
      border-left: 4px solid #B85062;
      padding-left: 8px;
    }
    .profile-card {
      background: #FAF6F4;
      border: 1px solid #F2E8E6;
      border-radius: 8px;
      padding: 10px 14px;
      margin-bottom: 14px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      font-size: 9.5pt;
    }
    .profile-card div strong {
      display: block;
      color: #8E717B;
      font-size: 8pt;
      text-transform: uppercase;
    }
    .targets-summary {
      background: #FDF4F2;
      border: 1px solid #F8D8D3;
      border-radius: 8px;
      padding: 10px 14px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 10pt;
    }
    .targets-summary .target-badge {
      background: #B85062;
      color: #fff;
      padding: 4px 10px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 11pt;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 14px;
      font-size: 9pt;
    }
    th, td {
      border: 1px solid #E8DCD9;
      padding: 6px 8px;
      text-align: left;
    }
    th {
      background: #FAF6F4;
      color: #312328;
      font-weight: 700;
    }
    .meal-header-row td {
      background: #F3EAE8;
      font-weight: 700;
      color: #584149;
    }
    .totals-row td {
      background: #FAF6F4;
      font-weight: 700;
      border-top: 2px solid #B85062;
    }
    .badge {
      display: inline-block;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 7.5pt;
      font-weight: 600;
    }
    .badge-veg { background: #E6F4EA; color: #137333; }
    .badge-nonveg { background: #FCE8E6; color: #C5221F; }
    .badge-egg { background: #FEF7E0; color: #B06000; }
    .notes-box {
      background: #FAFAFA;
      border: 1px dashed #D0C0C5;
      border-radius: 8px;
      padding: 10px 14px;
      font-size: 8.5pt;
      margin-top: 14px;
      color: #584149;
    }
    .notes-box h4 {
      font-size: 9.5pt;
      color: #312328;
      margin-bottom: 4px;
    }
    .disclaimer {
      font-size: 7.5pt;
      color: #8E717B;
      border-top: 1px solid #E8DCD9;
      padding-top: 10px;
      margin-top: 16px;
      line-height: 1.35;
    }
    .print-actions {
      margin-bottom: 16px;
      text-align: right;
    }
    .btn-print {
      background: #B85062;
      color: #fff;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-weight: 700;
      cursor: pointer;
      font-size: 10pt;
    }
    @media print {
      .print-actions {
        display: none;
      }
    }
  </style>
</head>
<body>

  <div class="print-actions">
    <button class="btn-print" onclick="window.print()">Print or Save as PDF</button>
  </div>

  <div class="header">
    <div>
      <div class="brand-title">HerLytics</div>
      <div class="brand-subtitle">Personalized Indian Nutrition & Meal Plan Chart</div>
    </div>
    <div class="meta-box">
      <div><strong>Date:</strong> ${plan.dateGenerated}</div>
      <div><strong>Plan ID:</strong> ${plan.planId}</div>
      <div><strong>Diet:</strong> ${plan.profileSnapshot.dietPreference}</div>
    </div>
  </div>

  <div class="profile-card">
    <div>
      <strong>Member Name</strong>
      ${userName}
    </div>
    <div>
      <strong>Age / BMI</strong>
      ${userAge} yrs (${userBMI} kg/m²)
    </div>
    <div>
      <strong>Height / Weight</strong>
      ${userHeight} cm / ${userWeight} kg
    </div>
    <div>
      <strong>Activity Level</strong>
      ${plan.profileSnapshot.activityLevel.toUpperCase()}
    </div>
  </div>

  <div class="targets-summary">
    <div>
      <strong>Estimated Daily Energy Needs:</strong> ${plan.energyRequirement.tdee} kcal
      <span style="display:block; font-size:8.5pt; color:#8E717B;">Calculated via Mifflin-St Jeor Energy Equation</span>
    </div>
    <div class="target-badge">
      Meal Plan Target: ${plan.energyRequirement.mealPlanTargetCalories} kcal
    </div>
  </div>

  <div class="section-title">Daily Meals & Nutritional Breakdown</div>
  <table>
    <thead>
      <tr>
        <th style="width: 28%;">Meal / Food Item</th>
        <th style="width: 14%;">Serving Portion</th>
        <th style="width: 10%;">Weight</th>
        <th style="width: 10%;">Energy</th>
        <th style="width: 9%;">Protein</th>
        <th style="width: 9%;">Carbs</th>
        <th style="width: 9%;">Fats</th>
        <th style="width: 11%;">Fiber</th>
      </tr>
    </thead>
    <tbody>
      ${plan.meals
        .map(
          (m) => `
        <tr class="meal-header-row">
          <td colspan="8">
            ${m.title} (${m.recommendedTime}) — Slot Total: ${m.slotTotals.calories} kcal | ${m.slotTotals.proteinGrams}g Protein
          </td>
        </tr>
        ${m.items
          .map(
            (item) => `
          <tr>
            <td>
              <strong>${item.food.name}</strong>
              <div style="font-size: 7.5pt; color: #8E717B;">
                ${item.food.region.join(', ')} • ${item.food.category}
                ${
                  item.food.allergens.length > 0 && !item.food.allergens.includes('no-allergies')
                    ? ` • <span style="color:#C5221F;">Allergens: ${item.food.allergens.join(', ')}</span>`
                    : ''
                }
              </div>
            </td>
            <td>${item.portionMultiplier !== 1.0 ? `${item.portionMultiplier}x ` : ''}${item.food.serving}</td>
            <td>${Math.round(item.food.totalWeightGrams * item.portionMultiplier)}g</td>
            <td><strong>${item.calculatedCalories} kcal</strong></td>
            <td>${item.calculatedProtein}g</td>
            <td>${item.calculatedCarbs}g</td>
            <td>${item.calculatedFat}g</td>
            <td><strong style="color:#137333;">${item.calculatedFiber}g</strong></td>
          </tr>
        `
          )
          .join('')}
      `
        )
        .join('')}
      <tr class="totals-row">
        <td colspan="3"><strong>DAILY TOTALS</strong></td>
        <td><strong>${plan.dailyTotals.calories} kcal</strong></td>
        <td><strong>${plan.dailyTotals.proteinGrams}g</strong></td>
        <td><strong>${plan.dailyTotals.carbsGrams}g</strong></td>
        <td><strong>${plan.dailyTotals.fatGrams}g</strong></td>
        <td><strong style="color:#137333;">${plan.dailyTotals.fiberGrams}g</strong></td>
      </tr>
    </tbody>
  </table>

  <div class="notes-box">
    <h4>Practical Meal Guidance & Glycemic Notes</h4>
    <ul style="padding-left: 16px;">
      <li><strong>Fiber & Satiety:</strong> This meal plan achieves ${plan.dailyTotals.fiberGrams}g of dietary fiber, supporting steady post-prandial glycemic response and regular bowel motility.</li>
      <li><strong>Portion Authenticity:</strong> All calories and macronutrients reflect exact lab-recorded serving weights from the healthy Indian foods reference dataset.</li>
      <li><strong>Swiggy & Zomato Ordering:</strong> If ordering comparable dishes externally, note that restaurant preparations may use higher cooking fats, sodium, and different ingredients compared to home-cooked formulations.</li>
      ${
        plan.profileSnapshot.allergies.length > 0
          ? `<li><strong>Allergy Exclusions:</strong> Hard exclusion applied for: ${plan.profileSnapshot.allergies.join(
              ', '
            )}. Always re-verify ingredients with dining providers.</li>`
          : ''
      }
    </ul>
  </div>

  <div class="disclaimer">
    <strong>Medical & Nutrition Disclaimer:</strong> This personalized diet chart is generated for educational, wellness, and lifestyle informational purposes only. It does not constitute individualized clinical nutrition therapy, medical diagnosis, or treatment. PCOS is a complex endocrine condition; no individual food or meal plan is claimed to cure or prevent PCOS. Users who are pregnant, lactating, adolescent, underweight, or managing diabetes or eating disorder concerns should consult a qualified healthcare professional or registered clinical dietitian before making significant dietary changes.
  </div>

</body>
</html>
  `;

  printWindow.document.open();
  printWindow.document.write(htmlContent);
  printWindow.document.close();
}
