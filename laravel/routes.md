# Routes

[[toc]]

### Set cache & headers from Route

```php
Route::middleware('cache.headers:no_cache,max-age=300,private;etag')->group(function () {
    Route::get('page', [PageController::class, 'index'])->name('page');
});
```

<EditOnGithub repo_name="cheatsheets" edit_url="laravel/routes.md"/>
