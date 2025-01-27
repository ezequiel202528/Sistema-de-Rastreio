


<?php

$servidor = 'localhost';
$banco = 'yase';
$usuario = 'root';
$senha = "";
$conexao = mysqli_connect($servidor, $usuario, $senha, $banco);
    if (!$conexao){
        die("Falaha ao conectar:" . mysqli_connect_error());
    }

    $modelo = $_POST['txtmodelo'];
    $numero = $_POST['txtnumero'];
    $anofab = $_POST['txtanofab'];
    $reteste = $_POST['txtreteste'];
    // $preteste = $_POST['txtPreteste'];
    $selo =  $_POST['txtselo'];
    $norma = $_POST['txtnorma'];
    $tipo = $_POST['txttipo'];
    $capacidade = $_POST['txtcapacidade'];

    $sql = "INSERT INTO yase.form(modelo, numero, anofab, ret, selo, normaF, tipo, cap)
    values
    ('$modelo','$numero','$anofab','$reteste','$selo','$norma','$tipo','$capacidade')";

    if (mysqli_query($conexao, $sql)) {
        echo"Dados inseridos ao banco";
    }

    mysqli_close($conexao);
?>