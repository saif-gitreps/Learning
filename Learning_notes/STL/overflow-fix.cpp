int countNicePairs(vector<int>& nums) {
        unordered_map<long long, long long> mp;
        int ans = 0;
        for(int i = 0 ; i < nums.size(); i++){
            int rev = 0;
            int temp = nums[i];
            while(temp > 0){
                rev = rev * 10 + (temp % 10);
                temp /= 10;
            }
            // in this we use this modulo for overcoming overflow issue,
            // it is safe to use for even smaller values just to be on the safer side.
            ans = (ans + mp[nums[i] - rev] ++) % int(1e9 + 7);
        }
        return ans;
    }