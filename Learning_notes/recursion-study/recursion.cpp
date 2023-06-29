#include <bits/stdc++.h>
using namespace std;;
#define FAST(SUIII); ios_base::sync_with_stdio(false);cin.tie(NULL);
const int MAXN = 100010;

void solving(int i,int n){
  // this is backtracking to solve 3 2 1 .
   if(i==n){
      return;
   } 
   solving(i+1,n);
  cout<<n<<" ";
}
void solving(int n){
  // this is backtracking to solve 1 2 3 .
   if(n==0){
      return;
   }
   solving(n-1);
   cout<<n<<" "; 
}

void solve(){
   solving(5);

}
int main(){
   FAST(SUIII);
   //int t;cin>>t;while(t--)
   solve();
}

