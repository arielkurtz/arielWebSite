<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Default3.aspx.cs" Inherits="Default3" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">


    <link href="StyleSheetTables.css" rel="stylesheet" />
    <a href="MasterPage.master">MasterPage.master</a>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div class="table-wrap">
    <table class="table-basic">
    <tr>
        <th>שם התוכנה</th>
        <th>מחיר</th>
        <th>שימוש עיקרי</th>
    </tr>

    <tr>
        <td>Adobe After Effects</td>
        <td>כ־50 דולר לחודש</td>
        <td>יצירת ויזואל אפקטס, אנימציות, ומושן גרפיקס</td>
    </tr>

    <tr>
        <td>Adobe Premiere Pro</td>
        <td>כ־50 דולר לחודש</td>
        <td>עריכת וידאו מקצועית</td>
    </tr>

    <tr>
        <td>Adobe Photoshop</td>
        <td>כ־20 דולר לחודש</td>
        <td>עיבוד ועיצוב תמונות, גרפיקה קבועה</td>
    </tr>

    <tr>
        <td>DaVinci Resolve</td>
        <td>חינם (גרסת Studio – 295 דולר)</td>
        <td>עריכת וידאו, תיקוני צבע, אודיו ו-VFX</td>
    </tr>
</table>
        </div>
</asp:Content>

