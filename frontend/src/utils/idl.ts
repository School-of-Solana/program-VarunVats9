export type Tipping = {
    "version": "0.1.0",
    "name": "tipping",
    "instructions": [
        {
            "name": "initializeUser",
            "accounts": [
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "userStats",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "tip",
            "accounts": [
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "recipient",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userStats",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "userStats",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "totalTipsSent",
                        "type": "u64"
                    },
                    {
                        "name": "totalTipsReceived",
                        "type": "u64"
                    },
                    {
                        "name": "bump",
                        "type": "u8"
                    }
                ]
            }
        }
    ]
};

export const IDL: Tipping = {
    "version": "0.1.0",
    "name": "tipping",
    "instructions": [
        {
            "name": "initializeUser",
            "accounts": [
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "userStats",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "tip",
            "accounts": [
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "recipient",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userStats",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "userStats",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "totalTipsSent",
                        "type": "u64"
                    },
                    {
                        "name": "totalTipsReceived",
                        "type": "u64"
                    },
                    {
                        "name": "bump",
                        "type": "u8"
                    }
                ]
            }
        }
    ]
};
