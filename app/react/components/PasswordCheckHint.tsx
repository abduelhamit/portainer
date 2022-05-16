import { usePublicSettings } from '@/portainer/settings/queries';

export function PasswordCheckHint() {
  const settingsQuery = usePublicSettings();
  const minPasswordLength = settingsQuery.data?.RequiredPasswordLength;

  return (
    <div>
      <p className="text-muted">
        <i
          className="fa fa-exclamation-triangle orange-icon space-right"
          aria-hidden="true"
        />
        The password must be at least {minPasswordLength} characters long.
      </p>
    </div>
  );
}
