# Algorithms and Data Structures

## Intersection Destructive

Traverse through 2 Sorted arrays to find matching pairs. Instead of using a _for_ loop we constantly compare the first value in each array, removing the lower value on each pass of the while. We run the _while_ while both arrays still have a length.
On each pass:

- if arr1[0] < arr2[0] remove arr1[0] from arr1
- else if arr1[0] > arr2[0] remove arr2[0] from arr2
- else arr1[0]==arr2[0] push arr1[0] into resulting array and remove both arr1[0] & arr2[0]

## Linked List

A linked list is collection of nodes where each node holds a reference to it's following, "next", node. A linked list holds reference to the head node.

## Doubly Linked List

Much like the linked list, but each node carries a reference to the previous node.

## Queue

A queue is an _array_ that follows the rule: Items are _added_ to the end and _removed_ from the top of the stack. First in, First Out.

## Stack

A stack is an _array_ that follows the rule: Items are _added_ to the top or _removed_ from the top of the stack. This is how the "call stack" works. Last in, First Out

## Hash Table

## Heap

## Priority Queue

## Trie

## Tree (Binary Search Tree, AVL Tree)
