# Commands

[[toc]]

## Publish package nova resource

We've all been there. You need to publish a Nova Resource of one of the marshmallow packages. Back to the documentation. We listed the most common ones here, just for you!

### Cart

```bash
php artisan marshmallow:resource Prospect Ecommerce\\Cart
php artisan marshmallow:resource ShoppingCart Ecommerce\\Cart
php artisan marshmallow:resource Customer Ecommerce\\Cart
php artisan marshmallow:resource ShippingMethod Ecommerce\\Cart
php artisan marshmallow:resource ShippingMethodCondition Ecommerce\\Cart
```

### Product

```bash
php artisan marshmallow:resource Product Product
php artisan marshmallow:resource Supplier Product
php artisan marshmallow:resource ProductCategory Product
php artisan marshmallow:resource Product Product
php artisan marshmallow:resource ProductCategory Product
```

### Priceable

```bash
php artisan marshmallow:resource Price Priceable
php artisan marshmallow:resource VatRate Priceable
php artisan marshmallow:resource Currency Priceable
php artisan marshmallow:resource PriceType Priceable
```

### Addressable

```bash
php artisan marshmallow:resource Address Addressable
php artisan marshmallow:resource AddressType Addressable
```

### Others

```bash
php artisan marshmallow:resource Route Seoable
php artisan marshmallow:resource Page Pages
php artisan marshmallow:resource IpAccess IpAccess
php artisan marshmallow:resource Redirect Redirectable
```

<EditOnGithub repo_name="cheatsheets" edit_url="nova/commands.md"/>
