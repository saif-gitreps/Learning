
int f(string s,int i){
   if(i>=s.size()/2){
      return true;
   }
   if(s[i]!=s[s.size()-i-1]){
      return false;
   }
   return f(s,i+1);
}

void solve(){
   cout<<f("magam",0);
   
}
int main(){
   solve();
}
