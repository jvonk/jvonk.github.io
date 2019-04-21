<details>
<summary>
Fatih Gelgi
</summary>

The problem can be solved with different approaches. A simple idea is of course brute-force -- try all possible elevations and find the minimum amount. We can try all possible values as follows: try the modification for elevation interval (0,17) then (1,18), (2,19), ..., (83,100). For each elevation interval (i,i+17), we need to calculate the cost for each hill j:

1. If the elevation of hill j, say hill[j], is in the interval (i,i+17) then there is no cost.
2. If it is less than i then the cost increases by (i-hill[j])^2
3. If it is greater than i+17 then the cost increases by (hill[j]-(i+17))^2

The total cost for that interval will be the sum of the costs of modifying all hills.

For the sample input:

```none
hill			elevation intervals and cost
height (0,17)  (1,18)  (2,19)  (3,20)  (4,21)  (5,22)  (6,23)  (7,24) ....
------ ---------------------------------------------------------------
 1	0	0	1	4	9	16	25	36	
 4	0	0	0	0	0	1	4	9
20	9	4	1	0	0	0	0	0
21	16	9	4	1	0	0	0	0
24	49	36	25	16	9	4	1	0
	-------------------------------------------------------------
total	74	49	31	21	*18*	21	30	45
```

As you observed, it is unnecessary to try elevation intervals after (7,24) since the maximum height is 24. You may want to modify the solution to eliminate these type of redundancies although it is not necessary.

For each interval, scanning through all hill elevations require O(N) time. Since we try all possible intervals, the total time is O(NM) where M is the size of the elevation range. Since N=1000 and M=100 are very small, this brute-force approach is sufficient. A sample code is provided below:

```cpp
#include <fstream>

using namespace std;

int n,hills[1000];

int main()
{
	ifstream fin("skidesign.in");
	fin >> n;
	for (int i=0; i<n; i++)
		fin >> hills[i];
	fin.close();

	// brute-force search
	// try all elevation intervals from (0,17) to (83,100)
	int mincost=1000000000;
	for (int i=0; i<=83; i++)
	{
		// calculate the cost for elevation interval (i,i+17)
		int cost=0,x;
		for (int j=0; j<n; j++)
		{
			// if hill is below the interval
			if (hills[j]<i)
				x=i-hills[j];
			// if hill is above the interval
			else if (hills[j]>i+17)
				x=hills[j]-(i+17);
			// if hill is int the interval
			else
				x=0;
			cost+=x*x;
		}
		// update the minimum cost
		mincost=min(mincost,cost);
	}

	ofstream fout("skidesign.out");
	fout << mincost << "\n";
	fout.close();
}
```

</details>

