# Task Completion Guidelines

## Required Steps After Code Changes

### 1. Code Quality Check
- Run `npm run lint` to ensure ESLint passes
- Fix any linting errors before proceeding

### 2. Build Verification
- Run `npm run build` to ensure TypeScript compilation succeeds
- This also runs `tsc -b` for type checking
- Fix any TypeScript errors

### 3. Development Testing (Optional)
- Run `npm run dev` to test changes in development mode
- Verify functionality works as expected
- Check browser console for any runtime errors

### 4. Code Review Checklist
- Follow established naming conventions
- Ensure proper TypeScript typing
- Use functional components with hooks
- Follow existing import/export patterns
- Maintain consistent code style

### 5. Git Workflow (if applicable)
- Stage relevant changes with `git add`
- Commit with descriptive messages
- Do not commit unless explicitly requested by user

## Notes
- No testing framework is currently set up
- No formatting tool (like Prettier) is configured
- ESLint is the primary code quality tool