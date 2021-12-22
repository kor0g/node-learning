## Домашнее задание к занятию «2.4 Docker, установка и настройка»

### Задание 1 - Docker CLI

1. docker pull busybox
2. docker run --name pinger -it busybox ping -c 7 netology.ru
3. docker ps -a
```0412217fed95   busybox           "ping netology.ru"       3 minutes ago   Exited (137) 2 minutes ago                            pinger ```
4. docker logs pinger
```
PING netology.ru (172.67.21.207): 56 data bytes
64 bytes from 172.67.21.207: seq=0 ttl=37 time=35.047 ms
64 bytes from 172.67.21.207: seq=1 ttl=37 time=71.931 ms
64 bytes from 172.67.21.207: seq=2 ttl=37 time=81.699 ms
64 bytes from 172.67.21.207: seq=3 ttl=37 time=70.803 ms
64 bytes from 172.67.21.207: seq=4 ttl=37 time=70.580 ms
64 bytes from 172.67.21.207: seq=5 ttl=37 time=79.324 ms
64 bytes from 172.67.21.207: seq=6 ttl=37 time=77.350 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 35.047/69.533/81.699 ms
```
5. docker start pinger
6. docker ps -a
```
7dfa5c1d89ea   busybox           "ping -c 7 netology.…"   About a minute ago   Exited (0) 23 seconds ago                            pinger
```
7. docker logs pinger
```
64 bytes from 104.22.41.171: seq=0 ttl=37 time=45.528 ms
64 bytes from 104.22.41.171: seq=1 ttl=37 time=40.178 ms
64 bytes from 104.22.41.171: seq=2 ttl=37 time=79.693 ms
64 bytes from 104.22.41.171: seq=3 ttl=37 time=81.633 ms
64 bytes from 104.22.41.171: seq=4 ttl=37 time=80.866 ms
64 bytes from 104.22.41.171: seq=5 ttl=37 time=80.659 ms
64 bytes from 104.22.41.171: seq=6 ttl=37 time=79.256 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 40.178/69.687/81.633 ms
```
8. docker logs ping
```7```
9. docker rm pinger
10. docker rmi busybox

