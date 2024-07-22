export const selectIsLoggedIn = state => Boolean(state.auth.token);

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsLoading = state => state.auth.isLoading;

export const selectIsError = state => state.auth.isError;

export const selectShowOnboardingTour = state => state.auth.showOnboardingTour;
