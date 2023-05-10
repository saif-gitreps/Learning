void f(int a[],int i,int n){
   if(i>=n){
      return;
   }
   swap(a[i],a[n]);
   f(a,i+1,n-1);
}

int main(){
  int a[5] = {1,2,3,4,5};
  f(a,0,4);
  for(int i=0;i<5;i++)
    cout<<a[i]<<" ";
return 0;}
