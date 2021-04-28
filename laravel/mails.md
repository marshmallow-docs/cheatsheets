# Mails

[[toc]]

### Create a new mailable

```bash
php artisan make:mail FullMatrixMail --markdown=emails.customers.full-matrix
```

### Send a mail

```php
Mail::to('stef@marshmallow.dev')
    ->send(new LeadAdmin($data));
```

### Publish laravel mail templates

```bash
php artisan vendor:publish --tag=laravel-mail
```

<EditOnGithub repo_name="cheatsheets" edit_url="laravel/mails.md"/>
