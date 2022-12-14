/*
drill03 - 配列2
オセロの盤を作成したい。
table(#reversi)内に8x8のマス（td要素）を作成すること
中央4x4マスには
黒（●）と白（○）を配置しておくこと
[表示内容]中央位置は下記の様にマスを設定しておく

横（a〜h）
縦（1〜8）と過程すると、
d/4 には ○
d/5 には ●
e/4 には ●
e/5 には ○
を配置し、中央の4マスには黒石と白石が置かれている状況を作成すること
○ ●
● ○
*/

let td = document.querySelector(".wrap #reversi tbody");
let html = "<td>●</td>";
let htmlb = "<td>◯</td>";
let innerHTML = `<tr>
<td>○</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
</tr>
<tr>
<td>○</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
</tr>        <tr>
<td>○</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
</tr>        <tr>
<td>○</td>
<td>●</td>
<td>●</td>
<td>◯</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
</tr>        <tr>
<td>○</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>◯</td>
<td>●</td>
<td>●</td>
<td>●</td>
</tr>        <tr>
<td>○</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
</tr>        <tr>
<td>○</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
</tr>        <tr>
<td>○</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
<td>●</td>
</tr>
`
td.innerHTML = innerHTML

// td.insertBefore(html , null);