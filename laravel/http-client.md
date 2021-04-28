# HTTP client

[[toc]]

### Local development

```php
Http::withToken($token)
    ->withoutVerifying()
    ->get('https://marshmallow.test/api-endpoint');
```

<EditOnGithub repo_name="cheatsheets" edit_url="laravel/http-client.md"/>
