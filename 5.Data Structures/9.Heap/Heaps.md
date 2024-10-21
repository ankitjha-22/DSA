# Heaps

Heaps are a special type of binary tree data structure that satisfies the heap property.

### Heap property

1. In a Max-Heap, for every node, the value of the parent node is greater than or equal to the value of its children. The largest element is always at the root.

2. In a Min-Heap, for every node, the value of the parent node is less than or equal to the value of its children. The smallest element is always at the root.

### Key Characteristics of Heaps:

#### 1. Complete Binary Tree

Heaps are always complete binary trees. This means that all levels of the tree are fully filled except possibly for the last level, which is filled from left to right.

#### 2. Heap Property

Max-Heap: Parent node ≥ Child nodes

Min-Heap: Parent node ≤ Child nodes

#### 3. Implemented Using Arrays

Heaps are usually implemented as arrays rather than using tree nodes and pointers because a heap can be efficiently represented in a linear array.

### Operations on a Heap:

#### Insertion:

When a new element is inserted into the heap, it is added at the end of the array.
Then, it is "bubbled up" (or "heapified up") to its correct position to maintain the heap property.

This process compares the inserted element with its parent and swaps if necessary, continuing until the heap property is restored.

Time Complexity: O(log n)

#### Deletion (Extract Max or Extract Min):

In a max-heap, to remove the largest element (root), the last element of the array is swapped with the root, and then the last element is removed.

The new root is then "bubbled down" (or "heapified down") to restore the heap property by comparing it with its children and swapping if necessary.

Time Complexity: O(log n)

#### Heapify:

The process of rearranging elements in a subtree to maintain the heap property.

This is done by comparing a node with its children and swapping if the heap property is violated. The process is recursively applied to ensure the property holds in the entire subtree.

Time Complexity: O(log n)

#### Peek (Find Max/Min):

In a max-heap, the largest element (root) can be accessed directly.

In a min-heap, the smallest element (root) can be accessed directly.

Time Complexity: O(1)
