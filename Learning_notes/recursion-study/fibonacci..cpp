#include <bits/stdc++.h>
/*             ::Pasteboard::
===========================================

===========================================
*/
using namespace std;
#define s(x) sizeof(x)/sizeof(x[0]);
#define ll long long int
#define newline() "\n"
#define nexline() std::cout<<newline()
#define enter_arr(x,n) for(int i=0;i<n;i++)cin>>x[i]
#define out_arr(x,n) for(int i=0;i<n;i++)cout<<x[i]<<" " 
#define debug(a) cerr<< "line "<<__LINE__ <<" : "<< #a <<" --> "<<(a)<<"\n"
#define GGG 9223372036854775807
#define pb push_back
#define pf push_front
#define FAST(SUIII); ios_base::sync_with_stdio(false);cin.tie(NULL);
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
   //out_arr(a,10);

}

int main(){
   FAST(SUIII);
   //int t; cin>>t; while(t--)
    solve();
}




   









