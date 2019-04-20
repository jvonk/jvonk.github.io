---
layout: default
title:  Transformations
date:   2018-09-29 0:00:00 +0000
categories: USACO
short: transform
chapter: 1
section: 3
description: "Write a program that will recognize the minimum transformation that has been applied to the original pattern using rotations and reflections and combinations thereof."
---
 

A square pattern of size N x N (1 <= N <= 10) black and white square tiles is transformed into another square pattern. Write a program that will recognize the minimum transformation that has been applied to the original pattern given the following list of possible transformations:

1. 90 Degree Rotation: The pattern was rotated clockwise 90 degrees.
2. 180 Degree Rotation: The pattern was rotated clockwise 180 degrees.
3. 270 Degree Rotation: The pattern was rotated clockwise 270 degrees.
4. Reflection: The pattern was reflected horizontally (turned into a mirror image of itself by reflecting around a vertical line in the middle of the image).
5. Combination: The pattern was reflected horizontally and then subjected to one of the rotations (#1-#3).
6. No Change: The original pattern was not changed.
7. Invalid Transformation: The new pattern was not obtained by any of the above methods.

In the case that more than one transform could have been used, choose the one with the minimum number above.

### PROGRAM NAME: transform

### INPUT FORMAT


| **Line 1:**           | A single integer, N                                                                          |
| **Line 2..N+1:**      | N lines of N characters (each either '@' or '-'); this is the square before transformation |
| **Line N+2..2\*N+1:** | N lines of N characters (each either '@' or '-'); this is the square after transformation  |

### SAMPLE INPUT (file transform.in)

```none
3
@-@
---
@@-
@-@
@--
--@
```

### OUTPUT FORMAT

A single line containing the number from 1 through 7 (described above) that categorizes the transformation required to change from the 'before' representation to the 'after' representation.

### SAMPLE OUTPUT (file transform.out)

```none
1
```

{% contentfor analysis %}

<details>
<summary>
Russ Cox
</summary>

We represent a board as a data structure containing the dimension and the contents. We pass around the data structure itself, not a reference to it, so that we can return new boards, and so on.

This makes it easy to define reflect and rotate operations that return reflected and rotated boards.

Once we have these, we just check to see what combination of transformations makes the old board into the new board.

```cpp
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>

#define MAXN 10

typedef struct Board Board;
struct Board {
    int n;
    char b[MAXN][MAXN];
};

/* rotate 90 degree clockwise: [r, c] -> [c, n - r] */
Board
rotate(Board b)
{
    Board nb;
    int r, c;

    nb.n = b.n;
    for(r=0; r<b.n; r++)
        for(c=0; c<b.n; c++)
            nb.b[c][b.n-1 - r] = b.b[r][c];
    return nb;
}

/* reflect board horizontally: [r, c] -> [r, n-1 -c] */
Board
reflect(Board b)
{
    Board nb;
    int r, c;

    nb.n = b.n;
    for(r=0; r<b.n; r++)
        for(c=0; c<b.n; c++)
            nb.b[r][b.n-1 - c] = b.b[r][c];
    return nb;
}

/* return non-zero if and only if boards are equal */
int
eqboard(Board b, Board bb)
{
    int r, c;

    if(b.n != bb.n)
        return 0;
    for(r=0; r<b.n; r++)
        for(c=0; c<b.n; c++)
            if(b.b[r][c] != bb.b[r][c])
                return 0;
    return 1;
}

Board
rdboard(FILE *fin, int n)
{
    Board b;
    int r, c;

    b.n = n;
    for(r=0; r<n; r++) {
        for(c=0; c<n; c++)
            b.b[r][c] = getc(fin);
        assert(getc(fin) == '\n');
    }
    return b;
}

void
main(void)
{
    FILE *fin, *fout;
    Board b, nb;
    int n, change;

    fin = fopen("transform.in", "r");
    fout = fopen("transform.out", "w");
    assert(fin != NULL && fout != NULL);

    fscanf(fin, "%d\n", &n);
    b = rdboard(fin, n);
    nb = rdboard(fin, n);

    if(eqboard(nb, rotate(b)))
        change = 1;
    else if(eqboard(nb, rotate(rotate(b))))
        change = 2;
    else if(eqboard(nb, rotate(rotate(rotate(b)))))
        change = 3;
    else if(eqboard(nb, reflect(b)))
        change = 4;
    else if(eqboard(nb, rotate(reflect(b)))
         || eqboard(nb, rotate(rotate(reflect(b))))
         || eqboard(nb, rotate(rotate(rotate(reflect(b))))))
        change = 5;
    else if(eqboard(nb, b))
        change = 6;
    else
        change = 7;

    fprintf(fout, "%d\n", change);

    exit(0);
}
```

</details>

{% endcontentfor %}