
void tally_counter(){
   int input = INT_MAX;
   map<string,int> mp;
   while(input!=989){
      cout<<"Enter: \n0: Exit.\n1: Add tech.\n2: increment.\n3: Print everything\n";
      cout<<"----------------------\n";
      cin>>input;
      if(input == 1){
         cout<<"Enter tech name and its details: \n";
         string s; cin>>s;
         mp[s] = 1;
      }
      else if(input == 2){
         int i = 1;
         for(auto item : mp){
            cout<< i++ << ". " << item.first << ".\n";
         }
         cout<<"Select index or Skip (0):\n";
         int selected; cin>>selected;
         if(selected == 0){
            continue;
         }
         i = 1;
         for(auto item: mp){
            if(i == selected){
               int item_value = item.second; 
               ++item_value;
               item.second = item_value;
            }
            i++;
         }
      }
      else if(input == 3){
         int i = 1;
         for(auto item : mp){
            cout<< i++ << ". " << item.first << ": "<< item.second <<"\n";
         }
      }
   }
   cout<<"xx------------xx------------xx";
}

int main() {
   tally_counter();

}