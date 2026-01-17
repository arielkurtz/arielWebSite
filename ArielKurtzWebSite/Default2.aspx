<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master"
    AutoEventWireup="true" CodeFile="Default2.aspx.cs" Inherits="Default2" %>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <script src="javaScript/JavaScript.js"></script>

    <!-- CSS לשגיאות -->
    <style>
        .field-error {
            display: block;
            margin: 4px 0 10px;
            font-size: 12px;
            color: #d10000;
            min-height: 16px;
        }
    </style>

    <!-- קובץ JavaScript חיצוני -->

    <div class="auth-page">
        <div class="auth-card">

            <h1 class="auth-title">Sign Up</h1>
            <p class="auth-subtitle">Please fill in this form to create an account.</p>

            <hr class="auth-hr" />

            <!-- Username -->
            <label for="username"><b>Username</b></label>
            <input id="username" type="text" placeholder="Enter Username" name="username" required />
            <small id="err-username" class="field-error"></small>

            <!-- Password -->
            <label for="psw"><b>Password</b></label>
            <input id="psw" type="password" placeholder="Enter Password" name="psw" required />
            <small id="err-psw" class="field-error"></small>

            <!-- Repeat Password -->
            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input id="psw-repeat" type="password" placeholder="Repeat Password" name="psw-repeat" required />
            <small id="err-psw-repeat" class="field-error"></small>

            <!-- First Name -->
            <label for="firstName"><b>First Name</b></label>
            <input id="firstName" type="text" placeholder="Enter First Name" name="firstName" required />
            <small id="err-firstName" class="field-error"></small>

            <!-- Last Name -->
            <label for="lastName"><b>Last Name</b></label>
            <input id="lastName" type="text" placeholder="Enter Last Name" name="lastName" required />
            <small id="err-lastName" class="field-error"></small>

            <!-- Date of Birth -->
            <label for="dob"><b>Date of Birth</b></label>
            <input id="dob" type="date" name="dob" required />
            <small id="err-dob" class="field-error"></small>

            <!-- City (optional) -->
            <label for="city"><b>City</b></label>
            <input id="city" type="text" placeholder="Enter City (optional)" name="city" />
            <small id="err-city" class="field-error"></small>

            <!-- Phone -->
            <label for="phone"><b>Phone</b></label>
            <input id="phone" type="text" placeholder="03-1234567 או 052-1234567" name="phone" required />
            <small id="err-phone" class="field-error"></small>

            <!-- Email -->
            <label for="email"><b>Email</b></label>
            <input id="email" type="text" placeholder="Enter Email" name="email" required />
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
                <button type="reset" class="btn-secondary">Reset</button>
                <button type="submit" class="btn-primary">Sign Up</button>
            </div>

        </div>
    </div>

</asp:Content>
