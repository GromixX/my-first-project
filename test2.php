<?php
function func($arg) {
    $result = 0;
    for ($i = 0; $i < $arg; $i++) {
        $result = $result + $i;
    }
    return $result;
}
echo func(6);

$one = 'Naharis';
$two = 'Mormont';
$three = 'Sand';

echo '<br>';
echo "{$one[2]}{$two[1]}{$three[3]}{$two[4]}{$two[2]}";

echo '<br>';

$i = 1;
switch ($i) {
    case 0:
        echo "i equals 0";
    case 1:
        echo "i equals 1";
    case 2:
        echo "i equals 2";
        break;
    default:
        echo "i equals 3";
}


for ($x = 0; $x <= 100; $x++) {
    $y = $x / 3;
    if(gettype($y) == 'integer')
        echo $x . '<br>';
}
?>
 
 