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
  [ "Routing", "index.html", [
    [ "Namespaces", "namespaces.html", [
      [ "RoutingIndexPair", "namespaceoperations__research.html#a630fe793e232b361cd9fd99f18599df1", null ],
      [ "RoutingIndexPairs", "namespaceoperations__research.html#aef7db0bee0a22d1791d040fd3853f3b7", null ],
      [ "RoutingTransitCallback1", "namespaceoperations__research.html#aae02b84a58c3008fb747c0f6917bfe6c", null ],
      [ "RoutingTransitCallback2", "namespaceoperations__research.html#a26868b9d744edcd8d59145e068678885", null ],
      [ "SequenceVarLocalSearchOperatorTemplate", "namespaceoperations__research.html#ad502b08bb4d69dfbaf025415310b8da8", null ],
      [ "DimensionSchedulingStatus", "namespaceoperations__research.html#aa0787bf78fb09d1e30f2451b5a68d4b8", [
        [ "OPTIMAL", "namespaceoperations__research.html#aa0787bf78fb09d1e30f2451b5a68d4b8af00c8dbdd6e1f11bdae06be94277d293", null ],
        [ "RELAXED_OPTIMAL_ONLY", "namespaceoperations__research.html#aa0787bf78fb09d1e30f2451b5a68d4b8af8cfb2115ef7ab822bca8edd1edac285", null ],
        [ "INFEASIBLE", "namespaceoperations__research.html#aa0787bf78fb09d1e30f2451b5a68d4b8a6faaca695f728b47f47dd389f31e4a93", null ]
      ] ],
      [ "VarTypes", "namespaceoperations__research.html#a403e52e933033645c3388146d5e2edd2", [
        [ "UNSPECIFIED", "namespaceoperations__research.html#a403e52e933033645c3388146d5e2edd2aa876f4fb4e5f7f0c5c48fcf66c9ce7ce", null ],
        [ "DOMAIN_INT_VAR", "namespaceoperations__research.html#a403e52e933033645c3388146d5e2edd2afd9ce19c75c8a2e8ff4c7307eff08e38", null ],
        [ "BOOLEAN_VAR", "namespaceoperations__research.html#a403e52e933033645c3388146d5e2edd2a00e6c449ab034942ac313f8b48643f4b", null ],
        [ "CONST_VAR", "namespaceoperations__research.html#a403e52e933033645c3388146d5e2edd2ac84956f1086e3f828921e0b3d51d806b", null ],
        [ "VAR_ADD_CST", "namespaceoperations__research.html#a403e52e933033645c3388146d5e2edd2a16071208281c29136c1be022b7d170f0", null ],
        [ "VAR_TIMES_CST", "namespaceoperations__research.html#a403e52e933033645c3388146d5e2edd2a0ae20d0967db3441a2b885e5074c4b36", null ],
        [ "CST_SUB_VAR", "namespaceoperations__research.html#a403e52e933033645c3388146d5e2edd2a89a5a9b8c00be595eb52b4d464613d30", null ],
        [ "OPP_VAR", "namespaceoperations__research.html#a403e52e933033645c3388146d5e2edd2ae8e4c6f3e5a6d22d24204ec432f57860", null ],
        [ "TRACE_VAR", "namespaceoperations__research.html#a403e52e933033645c3388146d5e2edd2af2d15b703802d6a1f8f402f90de90dc6", null ]
      ] ],
      [ "AppendTasksFromIntervals", "namespaceoperations__research.html#a6a8bc2370087a30d5a122524bafa867b", null ],
      [ "AppendTasksFromPath", "namespaceoperations__research.html#aa3db12120fcb6529cf2860fac7ef37bd", null ],
      [ "AreAllBooleans", "namespaceoperations__research.html#a4bd8614e9bce9c273c413121d2ec8090", null ],
      [ "AreAllBound", "namespaceoperations__research.html#a19a4ca2d0c4a27ba4d87ec0685a0574c", null ],
      [ "AreAllBoundOrNull", "namespaceoperations__research.html#af59200267cf2d8e9da8d40bba20c44a2", null ],
      [ "AreAllBoundTo", "namespaceoperations__research.html#ab7b1f1dbabd2fca04bab085c83557fd1", null ],
      [ "AreAllGreaterOrEqual", "namespaceoperations__research.html#aeae00e72165d38d0a6df523ff1c29eb2", null ],
      [ "AreAllLessOrEqual", "namespaceoperations__research.html#a504d5b6dc98a899b2f4097949ad88c7d", null ],
      [ "AreAllNegative", "namespaceoperations__research.html#a1a4baee82ab9634bea78f8ff8cf63053", null ],
      [ "AreAllNull", "namespaceoperations__research.html#ac2beda849f583af0c8940390cd0b8b7a", null ],
      [ "AreAllOnes", "namespaceoperations__research.html#ad89f5b1f81cf90a080f8e8493cc05146", null ],
      [ "AreAllPositive", "namespaceoperations__research.html#a3aa822e0b8b7c48f31f424746d4f115b", null ],
      [ "AreAllStrictlyNegative", "namespaceoperations__research.html#a00aa7c5dd946b98a7cd7dedb2c2e5af9", null ],
      [ "AreAllStrictlyPositive", "namespaceoperations__research.html#a9e3c88b7f8f9293e27560a2a6f59e650", null ],
      [ "BuildModelParametersFromFlags", "namespaceoperations__research.html#afa8eef0f9e8ca3d08beb0a3beb719150", null ],
      [ "BuildSearchParametersFromFlags", "namespaceoperations__research.html#a4dc50faf46fe783b8318617657dedd14", null ],
      [ "CpRandomSeed", "namespaceoperations__research.html#af4e2e8cdd59e8a9cb52789f517f0ca81", null ],
      [ "DefaultRoutingModelParameters", "namespaceoperations__research.html#a2fb66556abf59bfcf2fc1b87789d2a8e", null ],
      [ "DefaultRoutingSearchParameters", "namespaceoperations__research.html#ab59d4ce2b572e1ae576d2aa181433187", null ],
      [ "DEFINE_INT_TYPE", "namespaceoperations__research.html#a9780159f49f7c79d290bbbfd6c719cb1", null ],
      [ "DEFINE_INT_TYPE", "namespaceoperations__research.html#ac84d6030766b7b51262704bf478ceae2", null ],
      [ "DEFINE_INT_TYPE", "namespaceoperations__research.html#a3a66af985c85e23c8275558b502f1d0c", null ],
      [ "DEFINE_INT_TYPE", "namespaceoperations__research.html#a744a950e36c53ba931d3df3b8b0dbd90", null ],
      [ "DEFINE_INT_TYPE", "namespaceoperations__research.html#ac1ec829918eeac0c17e2b83ef9fc0084", null ],
      [ "FillPathEvaluation", "namespaceoperations__research.html#aae315ffb47820060e3fa070260434118", null ],
      [ "FillTravelBoundsOfVehicle", "namespaceoperations__research.html#ac694e4749fb4e5c7739d20b84de6c5ec", null ],
      [ "FillValues", "namespaceoperations__research.html#a39241cd09c410586b0bc35bae2b39ac1", null ],
      [ "FindErrorInRoutingSearchParameters", "namespaceoperations__research.html#a4955428bea2f2202769a58fdd47a126d", null ],
      [ "FindErrorsInRoutingSearchParameters", "namespaceoperations__research.html#a1f170b3bf5907348fb270ce7445bbcd9", null ],
      [ "Hash1", "namespaceoperations__research.html#a5d97fe24c426d46b1a0938dc172c2c9b", null ],
      [ "Hash1", "namespaceoperations__research.html#aef610f7720e63fb050e3fa15fdbd3bd3", null ],
      [ "Hash1", "namespaceoperations__research.html#a7c5651efc71e9dd1505277e9e4103492", null ],
      [ "Hash1", "namespaceoperations__research.html#a06e76a399b57f76fc331443e38b758df", null ],
      [ "Hash1", "namespaceoperations__research.html#ab38b9e705a951a86a8b17287d4f97b3c", null ],
      [ "Hash1", "namespaceoperations__research.html#a9f86a5616c4964ad78052fee01dc6d40", null ],
      [ "Hash1", "namespaceoperations__research.html#a55afa9db1b04504b05d779ce667a0e83", null ],
      [ "IsArrayBoolean", "namespaceoperations__research.html#ae2c85258bf0b797759b3d85891fface5", null ],
      [ "IsArrayConstant", "namespaceoperations__research.html#a71ca0155a47a87389c01c634f6fc9e68", null ],
      [ "IsArrayInRange", "namespaceoperations__research.html#a04d7b4e48fbe90fd00f5a93785c28d83", null ],
      [ "IsIncreasing", "namespaceoperations__research.html#ad9dc06275df37ad4d7165f4e186f88dd", null ],
      [ "IsIncreasingContiguous", "namespaceoperations__research.html#a9694b944e5a2d9342da9e6ba6b8f79e8", null ],
      [ "MakeConstraintDemon0", "namespaceoperations__research.html#aa62c0e0e0b8b883e173f869ae070e857", null ],
      [ "MakeConstraintDemon1", "namespaceoperations__research.html#a73bd40cbf46e30b4a66b0802c1048669", null ],
      [ "MakeConstraintDemon2", "namespaceoperations__research.html#a2d4b6337731ff75263e422b7a35bfea5", null ],
      [ "MakeConstraintDemon3", "namespaceoperations__research.html#a0594bc5e0a5c4aea25dd06ab61d85bb6", null ],
      [ "MakeDelayedConstraintDemon0", "namespaceoperations__research.html#a1728c5b7a72a03d6ececfd31e87dbfb2", null ],
      [ "MakeDelayedConstraintDemon1", "namespaceoperations__research.html#a8665842c4ce811e4bfa50ec8330c93c1", null ],
      [ "MakeDelayedConstraintDemon2", "namespaceoperations__research.html#ad3e035057b40de066e18e848b5329e14", null ],
      [ "MakeDimensionFilter", "namespaceoperations__research.html#a99bf06ef04f619448998a5ac107edaa7", null ],
      [ "MakeLocalSearchOperator", "namespaceoperations__research.html#a1988908f406c46ceaed7911f83aef59c", null ],
      [ "MakePathStateFilter", "namespaceoperations__research.html#ae1de0a1f7cf121d53ee230f794ce51f5", null ],
      [ "MakeRestoreDimensionValuesForUnchangedRoutes", "namespaceoperations__research.html#a6e20bc08641201021d455c297e572bb1", null ],
      [ "MakeSetValuesFromTargets", "namespaceoperations__research.html#a7f3c7082ef5ac88b70d3488d5886812a", null ],
      [ "MakeVehicleBreaksFilter", "namespaceoperations__research.html#a447588dfd4d5f539ec22f403e21ca668", null ],
      [ "MaxVarArray", "namespaceoperations__research.html#af7082b74f427f6a4626810032c637e22", null ],
      [ "MinVarArray", "namespaceoperations__research.html#aeac206454368eff4836eb555ed73cc49", null ],
      [ "One", "namespaceoperations__research.html#a1ca0d97b3df401c5f41a1e17ec36a3bf", null ],
      [ "operator<<", "namespaceoperations__research.html#a51e0728b2f50b8aa26f3115138b8ff1b", null ],
      [ "operator<<", "namespaceoperations__research.html#a77a9fbc40ec14bb23e5ffcc367fc7bb7", null ],
      [ "operator<<", "namespaceoperations__research.html#a5243a6e26c5553715409101ba9dedfbb", null ],
      [ "ParameterDebugString", "namespaceoperations__research.html#ac03032b631b8e108629e9946b7a0e558", null ],
      [ "ParameterDebugString", "namespaceoperations__research.html#ac8ded3970b47db738dc03894d78ccfdf", null ],
      [ "PosIntDivDown", "namespaceoperations__research.html#a4116cc9820db4746ba645c45331f59cd", null ],
      [ "PosIntDivUp", "namespaceoperations__research.html#a7cf69969fdef86b60e78a64e49763036", null ],
      [ "SetAssignmentFromAssignment", "namespaceoperations__research.html#a57f1befcdc8fc2b6f9741369a1beb136", null ],
      [ "SolveModelWithSat", "namespaceoperations__research.html#a082573f2b119f85031afcc6b9096b102", null ],
      [ "ToInt64Vector", "namespaceoperations__research.html#abeac98dfd5ab1335f6d21a8d71bdfd51", null ],
      [ "Zero", "namespaceoperations__research.html#a4472d8617b138e897c490878af320404", null ]
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