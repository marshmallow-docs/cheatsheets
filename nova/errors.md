# Errors

[[toc]]

NovaServiceProvider::class

use App\Exceptions\Handler;
use Laravel\Nova\Exceptions\NovaExceptionHandler;
protected function registerExceptionHandler()
{
    $this->app->bind(NovaExceptionHandler::class, Handler::class);
}

<EditOnGithub repo_name="ecommerce" edit_url="git/submodules.md"/>
