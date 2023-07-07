#include <bits/stdc++.h>
/*             ::Pasteboard::
===========================================

===========================================
*/
using namespace std;
#define nexline() std::cout<<newline()

const int MAXN = 100010;
vector<int> find_factors(int n){vector<int> f;
for (int x=2;x*x<=n;x++)
{while(n%x==0) {f.push_back(x);n /= x;} }
if (n > 1) f.push_back(n);return f; }
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




   









