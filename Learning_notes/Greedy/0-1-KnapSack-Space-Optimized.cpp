int knapsack(vector<int>& wt, vector<int>& val, int n, int W) {
    vector<int> prev(W + 1, 0);
    for (int i = wt[0]; i <= W; i++) {
        prev[i] = val[0];
    }
    for (int ind = 0; ind < n; ind++) {
        for (int cap = W; cap >= 0; cap--) {
            int notTaken = prev[cap];
            int taken = INT_MIN;
            if (wt[ind] <= cap) {
                taken = val[ind] + prev[cap - wt[ind]];
            }
            prev[cap] = max(notTaken, taken);
        }
    }
    return prev[W];
}
