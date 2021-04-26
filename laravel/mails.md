# Mails

[[toc]]

php artisan make:mail FullMatrixMail --markdown=emails.customers.full-matrix

Mail::to('stef@marshmallow.dev')
->send(new LeadAdmin($data));

      php artisan vendor:publish --tag=laravel-mail

<EditOnGithub repo_name="ecommerce" edit_url="server/mail-settings.md"/>
