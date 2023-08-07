#include <bits/stdc++.h>
using namespace std;
const int MAXN = 100010;
const int N = 1e5 + 10;
vector<vector<int>> g(N);
vector<bool> visit(N);
vector<int> level(N);

void bfs(int source) {
    queue<int> q;
    q.push(source);
    visit[source] = true;
    while (q.empty() == false) {
        int current_node = q.front();
        q.pop();
        cout << current_node << " -> ";
        for (auto child : g[current_node]) {
            if (visit[child] != true) {
                q.push(child);
                visit[child] = true;
                // level is an extra step for the algorithm
                level[child] = level[current_node] + 1;
            }
        }
    }
    cout<<"\n";
}

int main() {
    int n;
    cout << "enter number of edges: \n";
    cin >> n;
    // ig n-1 edges
    for (int i = 0; i < n - 1; i++) {
        int node1, node2;
        cin >> node1 >> node2;
        g[node1].push_back(node2);
        g[node2].push_back(node1);
    }
    bfs(1);
    for (int i = 1; i <= n; i++) {
        cout << i << ": ";
        for (int neighbor : g[i]) {
            cout << neighbor << " ";
        }
        cout << "\n";
    }

    return 0;
}
 
