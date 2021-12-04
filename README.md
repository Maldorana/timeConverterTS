# Time From Seconds

## Instructions

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

## Examples

| INPUT    | OUTPUT                                             |
| -------- | -------------------------------------------------- |
| 0        | 'Now'                                              |
| 10       | '10 Seconds'                                       |
| 60       | '1 minute'                                         |
| 122      | '2 minutes and 2 seconds'                          |
| 3600     | '1 hour'                                           |
| 7264     | '2 hours, 1 minute and 4 seconds'                  |
| 86400    | '1 day'                                            |
| 178201   | '2 days, 1 hour, 30 minutes and 1 second'          |
| 31536000 | '1 year'                                           |
| 63250201 | '2 years, 2 days, 1 hour, 30 minutes and 1 second' |
