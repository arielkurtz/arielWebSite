<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master"
    AutoEventWireup="true" CodeFile="signUp.aspx.cs" Inherits="signUp" %>

<asp:Content ID="HeadContent" ContentPlaceHolderID="head" runat="server">

    <script src="../javaScript/singup.js"></script>

    <style>
        .field-error{
            display:block;
            margin:4px 0 10px;
            font-size:12px;
            color:#d10000;
            min-height:16px;
        }
        .invalid{
            border:1px solid #d10000 !important;
            outline:none;
        }
        .auth-errors{
            margin:10px 0 16px;
            padding:12px 14px;
            border:1px solid #fecaca;
            background:#fff1f2;
            color:#991b1b;
            border-radius:12px;
            font-weight:700;
        }
    </style>

</asp:Content>


<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div class="auth-page">
        <div class="auth-card">

            <h1 class="auth-title">Sign Up</h1>
            <p class="auth-subtitle">Please fill in this form to create an account.</p>

            <hr class="auth-hr" />

            <!-- Username -->
            <label for="username"><b>Username</b></label>
            <asp:TextBox ID="username" runat="server" ClientIDMode="Static" placeholder="Enter Username" />
            <small id="err-username" class="field-error"></small>

            <!-- Password -->
            <label for="psw"><b>Password</b></label>
            <asp:TextBox ID="psw" runat="server" ClientIDMode="Static" TextMode="Password" placeholder="Enter Password" />
            <small id="err-psw" class="field-error"></small>

            <!-- Repeat Password -->
            <label for="pswRepeat"><b>Repeat Password</b></label>
            <asp:TextBox ID="pswRepeat" runat="server" ClientIDMode="Static" TextMode="Password" placeholder="Repeat Password" />
            <small id="err-psw-repeat" class="field-error"></small>

            <!-- First Name -->
            <label for="firstName"><b>First Name</b></label>
            <input id="firstName" type="text" placeholder="Enter First Name" name="firstName" />
            <small id="err-firstName" class="field-error"></small>

            <!-- Last Name -->
            <label for="lastName"><b>Last Name</b></label>
            <input id="lastName" type="text" placeholder="Enter Last Name" name="lastName" />
            <small id="err-lastName" class="field-error"></small>

            <!-- Date of Birth -->
            <label for="dob"><b>Date of Birth</b></label>
            <input id="dob" type="date" name="dob" />
            <small id="err-dob" class="field-error"></small>

            <!-- City -->
            <label for="city"><b>City</b></label>
            <input id="city" type="text" placeholder="Enter City (optional)" name="city" />
            <small id="err-city" class="field-error"></small>

            <!-- Phone -->
            <label for="phone"><b>Phone</b></label>
            <input id="phone" type="text" placeholder="03-1234567 או 052-1234567" name="phone" />
            <small id="err-phone" class="field-error"></small>

            <!-- Email -->
            <label for="email"><b>Email</b></label>
            <input id="email" type="text" placeholder="Enter Email" name="email" />
            <small id="err-email" class="field-error"></small>

            <div class="auth-row">
                <input id="remember" type="checkbox" checked="checked" name="remember" />
                <label for="remember">Remember me</label>
            </div>

            <p class="auth-note">
                By creating an account you agree to our
                <a href="#">Terms &amp; Privacy</a>.
            </p>

            <div class="auth-actions">
                <asp:Button ID="btnReset" runat="server" Text="Reset"
                    CssClass="btn-secondary"
                    CausesValidation="false"
                    OnClientClick="resetForm(); return false;" />

                <asp:Button ID="btnSignUp" runat="server" Text="Sign Up"
                    CssClass="btn-primary"
                    OnClientClick="return validateForm();"
                    OnClick="btnSignUp_Click" />
            </div>

        </div>
    </div>

</asp:Content>