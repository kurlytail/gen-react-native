#!/usr/bin/env bash
PRG="$BASH_SOURCE"
progname=`basename "$BASH_SOURCE"`

while [ -h "$PRG" ] ; do
    ls=`ls -ld "$PRG"`
    link=`expr "$ls" : '.*-> \(.*\)$'`
    if expr "$link" : '/.*' > /dev/null; then
        PRG="$link"
    else
        PRG=`dirname "$PRG"`"/$link"
    fi
done

dir=$(dirname "$PRG")
$dir/sgen-react-native.sh -m $dir/../templates/nav/map.json -e $dir/../templates/nav/extensions $*