#include <bits/stdc++.h>
using namespace std;
#define debug(a) cerr<< "line "<<__LINE__ <<" : "<< #a <<" --> "<<(a)<<"\n"

vector<int> dp(11,-1);

int rev(int n){
   // TC -> O(n);
   // SC -> O(n) stack + O(n);
   if(n<=1){
      return n;
   }
   if(dp[n] != -1){
      return dp[n];
   }
   dp[n] = rev(n-1) + rev(n-2);
   return dp[n];
}

int kev(int n){
   // TC -> o(n);
   // SC -> o(n);
   dp[0] = 0;
   dp[1] = 1;
   for(int i = 2; i <= n; i++){
      dp[i] = dp[i-1] + dp[i-2];
   }
   return dp[n];
}

int pev(int n){
    // best solution , will allow to compute large fibonacci numbers and sequence at the same time.
   //TC -> O(n);
   //SC -> O(1);
   int prev = 0;
   int curr = 1;
   int ans = -1;
   for(int i = 2; i <= n ;i ++){
      ans = prev + curr;
      prev = curr;
      curr = ans;
   }
   return ans;
}

int main() {
   
}
 
