export const selectInfoByToday = state => state.water.infoByToday;
export const selectCompletionRate = state =>
  state.water.infoByToday.completionRate;
export const selectInfoBySelectedDay = state => state.water.infoBySelectedDay;
export const selectInfoByMonth = state => state.water.infoByMonth;
export const selectSelectedDate = state => state.water.selectedDate;
export const selectError = state => state.water.isError;
export const selectLoading = state => state.water.isLoading;
