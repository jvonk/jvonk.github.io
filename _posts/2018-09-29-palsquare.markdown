---
layout: default
title:  Palindromic Squares
date:   2018-09-29 3:00:00 +0000
categories: USACO
short: palsquare
chapter: 1
section: 3
description: "Given a number base, print all the integers such that the square of N is palindromic when expressed in the base; also print the value of that palindromic square."
---
Palindromes are numbers that read the same forwards as backwards. The number 12321 is a typical palindrome.

Given a number base B (2 <= B <= 20 base 10), print all the integers N (1 <= N <= 300 base 10) such that the square of N is palindromic when expressed in base B; also print the value of that palindromic square. Use the letters 'A', 'B', and so on to represent the digits 10, 11, and so on.

Print both the number and its square in base B.

## PROGRAM NAME: palsquare

## INPUT FORMAT
A single line with B, the base (specified in base 10).

##SAMPLE INPUT (file palsquare.in)
```none
10
```

## OUTPUT FORMAT
Lines with two integers represented in base B. The first integer is the number whose square is palindromic; the second integer is the square itself. NOTE WELL THAT BOTH INTEGERS ARE IN BASE B!

## SAMPLE OUTPUT (file palsquare.out)
```
1 1
2 4
3 9
11 121
22 484
26 676
101 10201
111 12321
121 14641
202 40804
212 44944
264 69696
```

{% contentfor analysis %}

<details>
<summary>
Russ Cox
</summary>

We generate all the squares from 1 to 300 and check to see which are palindromes.

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>
#include <ctype.h>
#include <math.h>

/* is string s a palindrome? */
int
ispal(char *s)
{
    char *t;

    t = s+strlen(s)-1;
    for(t=s+strlen(s)-1; s<t; s++, t--)
    	if(*s != *t)
	    return 0;

    return 1;
}

/* put the base b representation of n into s: 0 is represented by "" */

void
numbconv(char *s, int n, int b)
{
    int len;

    if(n == 0) {
	strcpy(s, "");
	return;
    }

    /* figure out first n-1 digits */
    numbconv(s, n/b, b);

    /* add last digit */
    len = strlen(s);
    s[len] = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"[n%b];
    s[len+1] = '\0';
}

void
main(void)
{
    char s[20];
    char t[20];
    int i, base;
    FILE *fin, *fout;

    fin = fopen("palsquare.in", "r");
    fout = fopen("palsquare.out", "w");
    assert(fin != NULL && fout != NULL);

    fscanf(fin, "%d", &base);
    for(i=1; i <= 300; i++) {
	numbconv(s, i*i, base);
	if(ispal(s)) {
	    numbconv(t, i, base);
	    fprintf(fout, "%s %s\n", t, s);
	}
    }
    exit(0);
}
```

</details>

{% endcontentfor %}