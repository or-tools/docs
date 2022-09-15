/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Graph", "index.html", [
    [ "Namespaces", "namespaces.html", [
      [ "ArcIndex", "namespaceoperations__research.html#aecf320bda6e95d1edaf3a546673e3e6b", null ],
      [ "ArcIndexArray", "namespaceoperations__research.html#ad2ab85b2912dbf12804d3d1ddea9ec15", null ],
      [ "CostArray", "namespaceoperations__research.html#acbdd6fd1484828a3d5e809c551ba8cf7", null ],
      [ "CostValue", "namespaceoperations__research.html#a1d1a935ab48f768867fc7e8607ca97b4", null ],
      [ "FlowQuantity", "namespaceoperations__research.html#a259d58fc853dd928f2148dbcf1ef25cd", null ],
      [ "ForwardStarGraph", "namespaceoperations__research.html#ab49bc230c31b15a51efb44be25b30472", null ],
      [ "ForwardStarStaticGraph", "namespaceoperations__research.html#ab2ba507587a78ec3b72a0d62c024bc7e", null ],
      [ "NodeIndex", "namespaceoperations__research.html#a7ffcae041a5d746371436101400cdb6b", null ],
      [ "NodeIndexArray", "namespaceoperations__research.html#a48bfd7172b9a8af435198c373a8cf5e4", null ],
      [ "PathNodeIndex", "namespaceoperations__research.html#ae8625c5e71962a0f99954d34dab9f92d", null ],
      [ "QuantityArray", "namespaceoperations__research.html#a03fc0981d2d99da114ccd8b3abc0c6e1", null ],
      [ "StarGraph", "namespaceoperations__research.html#af24b13c27331f67db15d6c2a3f3507e3", null ],
      [ "BronKerboschAlgorithmStatus", "namespaceoperations__research.html#abd4e546b0e3afb0208c7a44ee6ab4ea8", [
        [ "COMPLETED", "namespaceoperations__research.html#abd4e546b0e3afb0208c7a44ee6ab4ea8a8f7afecbc8fbc4cd0f50a57d1172482e", null ],
        [ "INTERRUPTED", "namespaceoperations__research.html#abd4e546b0e3afb0208c7a44ee6ab4ea8a658f2cadfdf09b6046246e9314f7cd43", null ]
      ] ],
      [ "CliqueResponse", "namespaceoperations__research.html#ae6df4b4cb7c39ca06812199bbee9119c", [
        [ "CONTINUE", "namespaceoperations__research.html#ae6df4b4cb7c39ca06812199bbee9119ca2f453cfe638e57e27bb0c9512436111e", null ],
        [ "STOP", "namespaceoperations__research.html#ae6df4b4cb7c39ca06812199bbee9119ca615a46af313786fc4e349f34118be111", null ]
      ] ],
      [ "AddArcsFromMinimumSpanningTree", "namespaceoperations__research.html#a158f98d93b9478ee1ed0f5d229f692d8", null ],
      [ "AStarShortestPath", "namespaceoperations__research.html#a40d226c5f5c250cf81ae0845a8afeb89", null ],
      [ "BellmanFordShortestPath", "namespaceoperations__research.html#ad7c912405ec283963f6a4f6dda80c674", null ],
      [ "BuildEulerianPath", "namespaceoperations__research.html#a5e09271409675426f09bdf41191d0d76", null ],
      [ "BuildEulerianPathFromNode", "namespaceoperations__research.html#a97c6302e3c1fa5092d2eb47fa75f771b", null ],
      [ "BuildEulerianTour", "namespaceoperations__research.html#a7253e2cd3b296e726ed514bbffec3d23", null ],
      [ "BuildEulerianTourFromNode", "namespaceoperations__research.html#ae593dafdd69d4bd887725296f27c1c05", null ],
      [ "BuildKruskalMinimumSpanningTree", "namespaceoperations__research.html#acc8df3ce07a1b772d4e1ee4dfc89dadb", null ],
      [ "BuildKruskalMinimumSpanningTreeFromSortedArcs", "namespaceoperations__research.html#ac2b80e3f28ded1372424e826f0b6361f", null ],
      [ "BuildLineGraph", "namespaceoperations__research.html#a62047a9cf5939eb44b14fc8f54914d10", null ],
      [ "BuildPrimMinimumSpanningTree", "namespaceoperations__research.html#a670484bed88013754fb8a881a3981e1e", null ],
      [ "ComputeMinimumWeightMatching", "namespaceoperations__research.html#a8371731ac8cc4cb8fffdf5ed1cb5c377", null ],
      [ "ComputeMinimumWeightMatchingWithMIP", "namespaceoperations__research.html#a35bcf8357110375c40ad975548613e88", null ],
      [ "ComputeOneTree", "namespaceoperations__research.html#a9146065082e931f24d172e84c192cedb", null ],
      [ "ComputeOneTreeLowerBound", "namespaceoperations__research.html#a3684d01f599be82144bf85ebed01bf38", null ],
      [ "ComputeOneTreeLowerBoundWithAlgorithm", "namespaceoperations__research.html#af30c23b4cf5a95f352518d3cfd151ac9", null ],
      [ "ComputeOneTreeLowerBoundWithParameters", "namespaceoperations__research.html#a77b2b7c1c7e6cae8e764388dd85a6f24", null ],
      [ "CoverArcsByCliques", "namespaceoperations__research.html#a5986867bcb6d1470fd6c27438d289fcd", null ],
      [ "DijkstraShortestPath", "namespaceoperations__research.html#a18d2a8338b0d0e7ec3852cc0b58037ed", null ],
      [ "FindCliques", "namespaceoperations__research.html#af7f3504c258b748227551a4d7b7bf036", null ],
      [ "GetNodeMinimizingEdgeCostToSource", "namespaceoperations__research.html#a572bc2416991e2cc32c8a4cd72e736fd", null ],
      [ "IsEulerianGraph", "namespaceoperations__research.html#a31c28a35827765bed2256810482a9a00", null ],
      [ "IsSemiEulerianGraph", "namespaceoperations__research.html#a346b245dea00985fda69e061addd1b5e", null ],
      [ "MakeHamiltonianPathSolver", "namespaceoperations__research.html#a0d1b58b68fce276e216415c0d2d92cee", null ],
      [ "NearestNeighbors", "namespaceoperations__research.html#ac0a6c6517fdffeaf842d79c3a78d6c8f", null ],
      [ "StableDijkstraShortestPath", "namespaceoperations__research.html#a9e9e916a0fd3a846388cc235c42d99fb", null ],
      [ "Graph", "namespaceutil.html#a2f76166dbe0c4055a1f256235ad00478", null ],
      [ "GraphToStringFormat", "namespaceutil.html#a2d1e9c029dfaa2e8dfd58862836440b9", [
        [ "PRINT_GRAPH_ARCS", "namespaceutil.html#a2d1e9c029dfaa2e8dfd58862836440b9a59afa9bae775818b44690c5d14cdf8d0", null ],
        [ "PRINT_GRAPH_ADJACENCY_LISTS", "namespaceutil.html#a2d1e9c029dfaa2e8dfd58862836440b9ac932364714f74e3ca75990c8126019a1", null ],
        [ "PRINT_GRAPH_ADJACENCY_LISTS_SORTED", "namespaceutil.html#a2d1e9c029dfaa2e8dfd58862836440b9ada36744a3f529ceb03e7c1faa842854d", null ]
      ] ],
      [ "BeginEndRange", "namespaceutil.html#af2e86a9e9e6c89f97c10066d822f4bc6", null ],
      [ "BeginEndRange", "namespaceutil.html#a74e8d5d0ab81b6a3c021a234489f928e", null ],
      [ "ComputeOnePossibleReverseArcMapping", "namespaceutil.html#a00a901881f9035f66a4204da4c0ea3e5", null ],
      [ "CopyGraph", "namespaceutil.html#ae5f98804c317dda817bff628d868c4dd", null ],
      [ "DEFINE_RANGE_BASED_ARC_ITERATION", "namespaceutil.html#a633270ef662bc2d920aa4730c53d3a23", null ],
      [ "DEFINE_RANGE_BASED_ARC_ITERATION", "namespaceutil.html#ad3b2630065ea645868db275c63f4e357", null ],
      [ "DEFINE_RANGE_BASED_ARC_ITERATION", "namespaceutil.html#a0a64715f739a5557fd5d07d88e6a19bf", null ],
      [ "DEFINE_RANGE_BASED_ARC_ITERATION", "namespaceutil.html#a69280f7c83ae52cbb7d853d1cdcb7887", null ],
      [ "DEFINE_RANGE_BASED_ARC_ITERATION", "namespaceutil.html#a73d20653f5a699939f668147ef60dff3", null ],
      [ "DEFINE_RANGE_BASED_ARC_ITERATION", "namespaceutil.html#ab8202a23b63204822c291bea98ee11d3", null ],
      [ "DEFINE_RANGE_BASED_ARC_ITERATION", "namespaceutil.html#afa02a9cfcd85d0aa70cfddcc23a17388", null ],
      [ "DEFINE_RANGE_BASED_ARC_ITERATION", "namespaceutil.html#a5494c15244a73ddfd3056675975d6368", null ],
      [ "DEFINE_RANGE_BASED_ARC_ITERATION", "namespaceutil.html#aa17fa0e29afc1aaecaa56670f3566461", null ],
      [ "DEFINE_RANGE_BASED_ARC_ITERATION", "namespaceutil.html#a5b2d8c5213a3d15c497666d46eb00dad", null ],
      [ "DEFINE_RANGE_BASED_ARC_ITERATION", "namespaceutil.html#a6a12191541bd93cbedd521dee65874ec", null ],
      [ "DEFINE_RANGE_BASED_ARC_ITERATION", "namespaceutil.html#a0acd6ca0d65121f7f1ea370a33041fca", null ],
      [ "DEFINE_RANGE_BASED_ARC_ITERATION", "namespaceutil.html#a307fd1e85e96a9f93f2db901bebdcd04", null ],
      [ "DEFINE_RANGE_BASED_ARC_ITERATION", "namespaceutil.html#ae76751e9079c17054cd169bb46d4b6d8", null ],
      [ "EqualRange", "namespaceutil.html#ad647883d483a923af76d158585116f16", null ],
      [ "EqualRange", "namespaceutil.html#a2827aa06a68ff375d037d2c185f0b8cb", null ],
      [ "GetConnectedComponents", "namespaceutil.html#a366d433bd2afb387ea527c581447dffc", null ],
      [ "GetSubgraphOfNodes", "namespaceutil.html#a99094e047812eb44a7c2b3b82091f560", null ],
      [ "GetWeaklyConnectedComponents", "namespaceutil.html#a851823073f912404d71bf5d82bb29c8c", null ],
      [ "GraphHasDuplicateArcs", "namespaceutil.html#a7cab01cf2313ef202fdb8d1540430c1c", null ],
      [ "GraphHasSelfArcs", "namespaceutil.html#a9aedc5b3920b0ce89959be43ece7625b", null ],
      [ "GraphIsSymmetric", "namespaceutil.html#aa94a02ae5c14feb50676668f2de166dc", null ],
      [ "GraphIsWeaklyConnected", "namespaceutil.html#ab66702bf387ec38027c1f94444872510", null ],
      [ "GraphToString", "namespaceutil.html#a372b5c94ec5d30f923449516ebc2a963", null ],
      [ "IsSubsetOf0N", "namespaceutil.html#a3459b0819c97e869f99ed00ad78b0883", null ],
      [ "IsValidPermutation", "namespaceutil.html#aa10ff66ea11640068a6eae7f2d117b9f", null ],
      [ "PathHasCycle", "namespaceutil.html#a3215b610ebe65cde55008dc1367c434e", null ],
      [ "Permute", "namespaceutil.html#ac0391f64a921368a71ff8fc6962d02a0", null ],
      [ "Permute", "namespaceutil.html#a9b724a4b8d90ff2c7b33b5b63bd4cbc6", null ],
      [ "PermuteWithExplicitElementType", "namespaceutil.html#ae655e47baed4e8071b395065198f19dd", null ],
      [ "RemapGraph", "namespaceutil.html#aab5724a929530fa1d28749dc82852388", null ],
      [ "RemoveCyclesFromPath", "namespaceutil.html#a77ac83968fcb358183853127d83d595a", null ],
      [ "RemoveSelfArcsAndDuplicateArcs", "namespaceutil.html#a95c44a2c444a459f0866bd5607537314", null ],
      [ "Reverse", "namespaceutil.html#a6d7c10f07f330f277d3d2bb0cb1abafa", null ],
      [ "WriteGraphToFile", "namespaceutil.html#a45fca0c4762006176ad5622ec40dea9c", null ]
    ] ],
    [ "Classes", "annotated.html", null ],
    [ "Files", "files.html", null ]
  ] ]
];

var NAVTREEINDEX =
[
"index.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';