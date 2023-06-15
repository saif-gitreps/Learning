void insertion(vector<int> &a){
   int n= a.size();
   for(int i=1;i<n;i++){
      int pivot=a[i];
      int j = i-1;
      while(pivot<a[j] && j>=0){
         a[j+1] = a[j];
         j--;
      }
      a[j+1] = pivot;
   }
}

int main(){
   vector<int> a = {6,5,9,3,10,15,12,16,INT_MAX};
   insertion(a);
   for(auto s:a){
      cout<<s<<" ";
   }
}
