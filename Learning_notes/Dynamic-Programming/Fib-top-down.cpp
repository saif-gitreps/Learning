#include <bits/stdc++.h>
using namespace std;
#define debug(a) cerr<< "line "<<__LINE__ <<" : "<< #a <<" --> "<<(a)<<"\n"
#define GGG 9223372036854775807
const int MAXN = 100010;
const int N = 1e5 + 10;

// fib[n] = fib[n-1] + fib[n-2];
// without dp O(2^n)
// with dp O(n) 

vector<int> dp(N,-1);

int fib(int n){
   if(n<=1){
      return n;
   }
   if(dp[n]!=-1){
      return dp[n];
   }
   dp[n] = fib(n-1) + fib(n-2);

   return dp[n];
}


int main() {
   
   int n;
   cin>>n;

   cout<<fib(n);
}
 
