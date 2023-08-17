#include<bits/stdc++.h>
using namespace std;
const int N = 100000;
vector<vector<int>> G(N);
vector<int> visited(N,false);

void bfs( int source ){
    queue<int> q;
    q.push(source);
    visited[source] = true;
    while(q.empty()!=true){
        int v = q.front();
        cout<<"traversed " << v<< " -> ";
        q.pop();
        for(auto s : G[v]){
            if(visited[s]==false){
                visited[s] = true;
                q.push(s);
               // cout<<"traversed " << v<< " -> ";
            }
        }
    }
}

void dfs(int source){
    visited[source] = true;
    cout<< "traversal " << source<< "->";
    for(auto s: G[source]){
        if(visited[s]!=true){
            dfs(s);
        }
    }
}


int main(){
        int node;
        int edge;
        cout<<"enter nodes and edges\n";
        cin>>node>>edge;
        cout<<"enter edges\n";
        for(int i=1;i<=edge;i++){
            int n1,n2;
            cin>>n1>>n2;
            G[n1].push_back(n2);
            G[n2].push_back(n1);
        }
        int source;
        cout<<"enter sources\n";
        cin>>source;
        dfs(source);
}
