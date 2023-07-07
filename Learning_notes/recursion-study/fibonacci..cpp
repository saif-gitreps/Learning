#include <bits/stdc++.h>
using namespace std;
#define nexline() std::cout<<newline()

const int MAXN = 100010;
/*==================================================*/

int rev(int n){
   if(n<=1){
      return n;
   }
   int last = rev(n-1);
   int slast = rev(n-2);
   return last+slast;
}

void solve(){

   cout<<rev(5);

}

int main(){
   FAST(SUIII);
   //int t; cin>>t; while(t--)
    solve();
}




   









