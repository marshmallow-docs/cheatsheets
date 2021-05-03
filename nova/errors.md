# Errors

[[toc]]

### Log errors to sentry.io

To log errors from your Nova installation into senty, you will need to add the code below in the `NovaServiceProvider` class.

```php
use App\Exceptions\Handler;
use Laravel\Nova\Exceptions\NovaExceptionHandler;

protected function registerExceptionHandler()
{
    $this->app->bind(NovaExceptionHandler::class, Handler::class);
}
```

<EditOnGithub repo_name="cheatsheets" edit_url="nova/errors.md"/>
