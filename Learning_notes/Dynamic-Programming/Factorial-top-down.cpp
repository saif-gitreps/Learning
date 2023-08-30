#include <bits/stdc++.h>
using namespace std;
#define debug(a) cerr<< "line "<<__LINE__ <<" : "<< #a <<" --> "<<(a)<<"\n"
#define GGG 9223372036854775807
const int MAXN = 100010;
const int N = 1e5 + 10;

vector<int> dp(N,-1);

int fact(int n){
   if(n==1){
      return 1;
   }
   dp[n] = fact(n-1)*n;
   return dp[n];
}

int main() {
   
   int n;
   cin>>n;

   cout<<fact(n);
}
 
