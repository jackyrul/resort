<?php
session_start();
if(!session_is_registered(myusername)){
//    ob_start();
//    header("Location: https://sitename.com/login.php");
//    exit();
    header("location:http://berdyansk.esy.es/#/admin");
}
else{
}
?>
<!DOCTYPE html>
<html ng-app="resortadmin">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Page title set in pageTitle directive -->
    <title page-title></title>

    <!-- Font awesome -->
    <link href="/Content/font-awesome/css/font-awesome.css" rel="stylesheet">

    <!-- Bootstrap and Fonts -->
    <link href="/Content/css/bootstrap.min.css" rel="stylesheet">
    <link href="/Content/js/plugins/toastr/toastr.min.css" rel="stylesheet" />

    <link href="/Content/css/plugins/iCheck/custom.css" rel="stylesheet" />
    <!-- Main avalanchain CSS files -->
    <link href="/Content/css/animate.css" rel="stylesheet">
    <link id="loadBefore" href="/Content/css/style.css" rel="stylesheet">
    <link href="/Content/css/main.css" rel="stylesheet">

</head>

<!-- ControllerAs syntax -->
<!-- Main controller with serveral data used in avalanchain theme on diferent view -->
<body ng-controller="MainCtrl as main">

<!-- Main view  -->
<div ui-view></div>

<!-- jQuery and Bootstrap -->
<script src="/Content/js/jquery/jquery-2.1.1.min.js"></script>
<script src="/Content/js/plugins/jquery-ui/jquery-ui.js"></script>
<script src="/Content/js/bootstrap/bootstrap.min.js"></script>

<!-- MetsiMenu -->
<script src="/Content/js/plugins/metisMenu/jquery.metisMenu.js"></script>

<!-- SlimScroll -->
<script src="/Content/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

<!-- Peace JS -->
<script src="/Content/js/plugins/pace/pace.min.js"></script>
<script src="/Content/js/plugins/toastr/toastr.min.js"></script>

<script src="/Content/js/plugins/iCheck/icheck.min.js" />

<!-- Custom and plugin javascript -->
<script src="/Content/js/resortadmin.js"></script>

<!-- Main Angular scripts-->
<script src="/Content/js/angular/angular.min.js"></script>
<script src="/Content/js/plugins/oclazyload/dist/ocLazyLoad.min.js"></script>
<script src="/Content/js/ui-router/angular-ui-router.min.js"></script>
<script src="/Content/js/bootstrap/ui-bootstrap-tpls-1.1.2.min.js"></script>


<!-- Anglar App Script -->
<script src="/Content/js/app.js"></script>
<script src="/Content/js/config2.js"></script>
<script src="/Content/js/directives.js"></script>
<script src="/Content/js/controllers.js"></script>
<script src="/Content/js/services/common.js"></script>
<script src="/Content/js/services/logger.js"></script>
<script src="/Content/js/services/datasevice2.js"></script>
<script src="/Content/js/services/dataprovider.js"></script>

<script src="/Content/views/aboutus/aboutus.js"></script>
<script src="/Content/views/photo/photo.js"></script>
<script src="/Content/views/pricing/pricing.js"></script>
<script src="/Content/views/admin/admin.js"></script>
<script src="/Content/views/entertainment/entertainment.js"></script>
<script src="/Content/views/overall/overall.js"></script>
</body>
</html>

