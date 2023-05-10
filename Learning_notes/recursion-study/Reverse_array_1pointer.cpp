void f(int a[],int i,int n){
   if(i>=n/2){
      return;
   }
   swap(a[i],a[n-i-1]);
   f(a,i+1,n);
}
int main(){
  int a[6] = {1,2,3,4,5,6};
  f(a,0,6);
  for(int i=0;i<6;i++){
    cout<<a[i]<<" ";
  }
}
