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


void rev(vector<int>  a,vector<int> &ds, vector<vector<int>> &ans,vector<bool> &mapping){
   if(ds.size()==a.size()){
      ans.push_back(ds);
      return;
   }
   for(int i=0;i<a.size();i++){
     if(mapping[a[i]]==false){
      mapping[a[i]] = true;
      ds.push_back(a[i]);
      rev(a,ds,ans,mapping);
      mapping[a[i]] = false;
      ds.pop_back();
     }
   }
}

int main(){
   vector<int> a = {1,2,3};
   vector<vector<int>> ans = {};
   vector<int> ds; 
   vector<bool> mapping(10000,false); 
   rev(a,ds,ans,mapping);
   //sort(ans.begin(),ans.end());
   for(auto s: ans){
      for(auto x:s){
         cout<<x<<" ";
      }
      cout<<" | ";
   }
   
   
}