TODO

    Implement authorization:
        https://devblogs.microsoft.com/premier-developer/angular-how-to-implement-role-based-security/
        https://github.com/laurieatkinson/ng-patterns-demo/tree/master/src/app/framework/services

    Add i18n:
        https://github.com/ngx-translate/core/issues/495#issuecomment-568422004
    

HOWTO:
    Commit messages:
        https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines

        Commit Message Format:
        Each commit message consists of a header, a body and a footer. The header has a special format that includes a type, a scope and a subject:

        <type>(<scope>): <subject>
        <BLANK LINE>
        <body>
        <BLANK LINE>
        <footer>
        The header is mandatory and the scope of the header is optional.

        Type:
        Must be one of the following:

        build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
        ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
        docs: Documentation only changes
        feat: A new feature
        fix: A bug fix
        perf: A code change that improves performance
        refactor: A code change that neither fixes a bug nor adds a feature
        style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
        test: Adding missing tests or correcting existing tests

        use the imperative, present tense: "change" not "changed" nor "changes"
        don't capitalize the first letter
        no dot (.) at the end
