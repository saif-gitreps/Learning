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

void rev(int i,vector<int> &a,vector<int> &ans,int sum){
   if(i>=a.size()){
      ans.push_back(sum);
      return;
   }
   sum+=a[i];
   rev(i+1,a,ans,sum);
   sum-=a[i];
   rev(i+1,a,ans,sum);
}

int main(){
   vector<int> a = {5,2,1};
   vector<int> ans = {};
   rev(0,a,ans,0);
   sort(ans.begin(),ans.end());
   for(auto s: ans){
      cout<<s<<" ";
   }
   
   
}