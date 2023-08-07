#include <bits/stdc++.h>
using namespace std;
#define debug(a) cerr<< "line "<<__LINE__ <<" : "<< #a <<" --> "<<(a)<<"\n"
#define GGG 9223372036854775807
const int MAXN = 100010;
const int N = 1e5 + 10;
vector<vector<int>> g(N);
vector<bool> visit(N);
vector<int> level(N);

void dfs(vector<vector<int>> graf, int source){
   visit[source] = true;
   cout<<source<<" -> ";
   for(auto neighbor: graf[source]){
      if(visit[neighbor]!=true){
         dfs(graf,neighbor);
      }
   }
   cout<<"\n";
}

int main() {
    int n;
    cout << "enter number of edges: \n";
    cin >> n;
    // ig n-1 edges.
    for (int i = 0; i < n - 1; i++) {
        int node1, node2;
        cin >> node1 >> node2;
        g[node1].push_back(node2);
        g[node2].push_back(node1);
    }
    dfs(g,1);
    for (int i = 1; i <= n; i++) {
        cout << i << ": ";
        for (int neighbor : g[i]) {
            cout << neighbor << " ";
        }
        cout << "\n";
    }

    return 0;
}
 
