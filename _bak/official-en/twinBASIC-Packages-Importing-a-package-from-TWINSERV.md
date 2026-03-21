### Importing a package from TWINSERV

Open the project from which you want to use a package, open the `Settings` file within it and navigate to the References section.   Select the 'Available Packages' button, and all packages that are on the server should be shown:

![432410211-d9f1e4d9-1805-47e5-93aa-251151b4e914](/images/official/2cbdfde0e3bf629040b3613f7e3f6b49.png)
<br>
<br>

If you tick one of the available packages, it will be downloaded and imported into the project:

![432416432-4e4b8e4d-2a1c-42e5-8f4b-5a9b3f523ee8](/images/official/557f8aa9997a1931124a222b516896e6.png)
<br>
<br>

Once you're finished, save and close the Settings file which will cause the compiler to be restarted.  Now you're ready to use the package!  In the example shown above I added a reference to the CSharpishStringFormater package, and I can now confirm that I can access components from the package in my code:

![432417844-e9a3fd21-8e6a-4485-b52c-0c041600826b](/images/official/7d82fa07dbfb4e2b6b5c3e8ecde24e5f.png)
<br>
<br>

Note: If you have any PRIVATE packages that you have published, they are only available when signed in.   If you are not already signed in, you will see a warning link that you can click to login:

![image](/images/official/8ca56580c3e54a3c30d88b24375c50a2.png)
<br>
<br>

After logging in, press the 'Available' button again to refresh the list.