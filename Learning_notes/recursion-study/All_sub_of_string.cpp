#include <bits/stdc++.h>
using namespace std;
#define ll long long int
#define newline() "\n"
#define enter_arr(x,n) for(int i=0;i<n;i++)cin>>x[i]
#define out_arr(x,n) for(int i=0;i<n;i++)cout<<x[i]<<" "
#define debug(a) cerr<< "line "<<__LINE__ <<" : "<< #a <<" --> "<<(a)<<"\n"
#define GGG 9223372036854775807
#define pb push_back
#define FAST(SUIII); ios_base::sync_with_stdio(false);cin.tie(NULL);
const int MAXN = 100010;
   
void rev(int i,string s,string ds){
   if(i==s.size()){
      cout<<ds<<" ";
      cout<<"\n";
      return;
   }
   ds.push_back(s[i]);
   rev(i+1,s,ds);
   ds.pop_back();
   rev(i+1,s,ds);
}

int main(){
   rev(0,"abcdef","");

}