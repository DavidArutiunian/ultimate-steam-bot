declare module 'steam-user' {
  interface IErrorResultKeys {
    readonly Invalid: 0;
    readonly OK: 1;
    readonly Fail: 2;
    readonly NoConnection: 3;
    readonly InvalidPassword: 5;
    readonly LoggedInElsewhere: 6;
    readonly InvalidProtocolVer: 7;
    readonly InvalidParam: 8;
    readonly FileNotFound: 9;
    readonly Busy: 10;
    readonly InvalidState: 11;
    readonly InvalidName: 12;
    readonly InvalidEmail: 13;
    readonly DuplicateName: 14;
    readonly AccessDenied: 15;
    readonly Timeout: 16;
    readonly Banned: 17;
    readonly AccountNotFound: 18;
    readonly InvalidSteamID: 19;
    readonly ServiceUnavailable: 20;
    readonly NotLoggedOn: 21;
    readonly Pending: 22;
    readonly EncryptionFailure: 23;
    readonly InsufficientPrivilege: 24;
    readonly LimitExceeded: 25;
    readonly Revoked: 26;
    readonly Expired: 27;
    readonly AlreadyRedeemed: 28;
    readonly DuplicateRequest: 29;
    readonly AlreadyOwned: 30;
    readonly IPNotFound: 31;
    readonly PersistFailed: 32;
    readonly LockingFailed: 33;
    readonly LogonSessionReplaced: 34;
    readonly ConnectFailed: 35;
    readonly HandshakeFailed: 36;
    readonly IOFailure: 37;
    readonly RemoteDisconnect: 38;
    readonly ShoppingCartNotFound: 39;
    readonly Blocked: 40;
    readonly Ignored: 41;
    readonly NoMatch: 42;
    readonly AccountDisabled: 43;
    readonly ServiceReadOnly: 44;
    readonly AccountNotFeatured: 45;
    readonly AdministratorOK: 46;
    readonly ContentVersion: 47;
    readonly TryAnotherCM: 48;
    readonly PasswordRequiredToKickSession: 49;
    readonly AlreadyLoggedInElsewhere: 50;
    readonly Suspended: 51;
    readonly Cancelled: 52;
    readonly DataCorruption: 53;
    readonly DiskFull: 54;
    readonly RemoteCallFailed: 55;
    readonly PasswordNotSet: 56;
    readonly PasswordUnset: 56;
    readonly ExternalAccountUnlinked: 57;
    readonly PSNTicketInvalid: 58;
    readonly ExternalAccountAlreadyLinked: 59;
    readonly RemoteFileConflict: 60;
    readonly IllegalPassword: 61;
    readonly SameAsPreviousValue: 62;
    readonly AccountLogonDenied: 63;
    readonly CannotUseOldPassword: 64;
    readonly InvalidLoginAuthCode: 65;
    readonly AccountLogonDeniedNoMailSent: 66;
    readonly AccountLogonDeniedNoMail: 66;
    readonly HardwareNotCapableOfIPT: 67;
    readonly IPTInitError: 68;
    readonly ParentalControlRestricted: 69;
    readonly FacebookQueryError: 70;
    readonly ExpiredLoginAuthCode: 71;
    readonly IPLoginRestrictionFailed: 72;
    readonly AccountLocked: 73;
    readonly AccountLockedDown: 73;
    readonly AccountLogonDeniedVerifiedEmailRequired: 74;
    readonly NoMatchingURL: 75;
    readonly BadResponse: 76;
    readonly RequirePasswordReEntry: 77;
    readonly ValueOutOfRange: 78;
    readonly UnexpectedError: 79;
    readonly Disabled: 80;
    readonly InvalidCEGSubmission: 81;
    readonly RestrictedDevice: 82;
    readonly RegionLocked: 83;
    readonly RateLimitExceeded: 84;
    readonly AccountLogonDeniedNeedTwoFactorCode: 85;
    readonly AccountLoginDeniedNeedTwoFactor: 85;
    readonly ItemOrEntryHasBeenDeleted: 86;
    readonly ItemDeleted: 86;
    readonly AccountLoginDeniedThrottle: 87;
    readonly TwoFactorCodeMismatch: 88;
    readonly TwoFactorActivationCodeMismatch: 89;
    readonly AccountAssociatedToMultiplePlayers: 90;
    readonly NotModified: 91;
    readonly NoMobileDeviceAvailable: 92;
    readonly TimeIsOutOfSync: 93;
    readonly SMSCodeFailed: 94;
    readonly TooManyAccountsAccessThisResource: 95;
    readonly AccountLimitExceeded: 95;
    readonly AccountActivityLimitExceeded: 96;
    readonly PhoneActivityLimitExceeded: 97;
  }

  enum EErrorResult {
    Invalid = 0,
    OK = 1,
    Fail = 2,
    NoConnection = 3,
    InvalidPassword = 5,
    LoggedInElsewhere = 6,
    InvalidProtocolVer = 7,
    InvalidParam = 8,
    FileNotFound = 9,
    Busy = 10,
    InvalidState = 11,
    InvalidName = 12,
    InvalidEmail = 13,
    DuplicateName = 14,
    AccessDenied = 15,
    Timeout = 16,
    Banned = 17,
    AccountNotFound = 18,
    InvalidSteamID = 19,
    ServiceUnavailable = 20,
    NotLoggedOn = 21,
    Pending = 22,
    EncryptionFailure = 23,
    InsufficientPrivilege = 24,
    LimitExceeded = 25,
    Revoked = 26,
    Expired = 27,
    AlreadyRedeemed = 28,
    DuplicateRequest = 29,
    AlreadyOwned = 30,
    IPNotFound = 31,
    PersistFailed = 32,
    LockingFailed = 33,
    LogonSessionReplaced = 34,
    ConnectFailed = 35,
    HandshakeFailed = 36,
    IOFailure = 37,
    RemoteDisconnect = 38,
    ShoppingCartNotFound = 39,
    Blocked = 40,
    Ignored = 41,
    NoMatch = 42,
    AccountDisabled = 43,
    ServiceReadOnly = 44,
    AccountNotFeatured = 45,
    AdministratorOK = 46,
    ContentVersion = 47,
    TryAnotherCM = 48,
    PasswordRequiredToKickSession = 49,
    AlreadyLoggedInElsewhere = 50,
    Suspended = 51,
    Cancelled = 52,
    DataCorruption = 53,
    DiskFull = 54,
    RemoteCallFailed = 55,
    PasswordNotSet = 56,
    PasswordUnset = 56,
    ExternalAccountUnlinked = 57,
    PSNTicketInvalid = 58,
    ExternalAccountAlreadyLinked = 59,
    RemoteFileConflict = 60,
    IllegalPassword = 61,
    SameAsPreviousValue = 62,
    AccountLogonDenied = 63,
    CannotUseOldPassword = 64,
    InvalidLoginAuthCode = 65,
    AccountLogonDeniedNoMailSent = 66,
    AccountLogonDeniedNoMail = 66,
    HardwareNotCapableOfIPT = 67,
    IPTInitError = 68,
    ParentalControlRestricted = 69,
    FacebookQueryError = 70,
    ExpiredLoginAuthCode = 71,
    IPLoginRestrictionFailed = 72,
    AccountLocked = 73,
    AccountLockedDown = 73,
    AccountLogonDeniedVerifiedEmailRequired = 74,
    NoMatchingURL = 75,
    BadResponse = 76,
    RequirePasswordReEntry = 77,
    ValueOutOfRange = 78,
    UnexpectedError = 79,
    Disabled = 80,
    InvalidCEGSubmission = 81,
    RestrictedDevice = 82,
    RegionLocked = 83,
    RateLimitExceeded = 84,
    AccountLogonDeniedNeedTwoFactorCode = 85,
    AccountLoginDeniedNeedTwoFactor = 85,
    ItemOrEntryHasBeenDeleted = 86,
    ItemDeleted = 86,
    AccountLoginDeniedThrottle = 87,
    TwoFactorCodeMismatch = 88,
    TwoFactorActivationCodeMismatch = 89,
    AccountAssociatedToMultiplePlayers = 90,
    NotModified = 91,
    NoMobileDeviceAvailable = 92,
    TimeIsOutOfSync = 93,
    SMSCodeFailed = 94,
    TooManyAccountsAccessThisResource = 95,
    AccountLimitExceeded = 95,
    AccountActivityLimitExceeded = 96,
    PhoneActivityLimitExceeded = 97,
  }
}
